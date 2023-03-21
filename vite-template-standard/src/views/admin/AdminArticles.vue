<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModel('add')">
        建立新文章
      </button>
    </div>
    <table class="table mt-4 text-white">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>標題</th>

          <th width="100">是否公開</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody v-for="article in articles" :key="article.id">
        <tr>
          <td>{{ article.tag }}</td>
          <td>{{ article.title }}</td>

          <td>
            <span class="text-success" v-if="article.isPublic">公開</span>
            <span v-else>未公開</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="getArticle(article.id)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModel('del', article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      v-if="pagination > 1"
      :pages="pagination"
      @emit-pages="getArticles"
    ></pagination>
    <hr v-else />
  </div>
  <!-- Modal -->
  <!-- 新增牌組 -->
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isAddArticle">新增文章</span>
            <span v-else>編輯文章</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">圖片</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="nowArticle.image"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片 </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadImg"
                />
              </div>
              <img class="img-fluid" :src="nowArticle.image" alt="" />
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="nowArticle.author"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="create_at"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="nowArticle.title"
                />
              </div>

              <div class="mb-3">
                <label for="tag" class="form-label">標籤</label>
                <input
                  id="tag"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標籤"
                  v-model="nowArticle.tag"
                />
              </div>

              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入比賽或發售日期(yyyy/mm/dd)"
                  v-model="nowArticle.description"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="nowArticle.content"
                ></ckeditor>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="isPublic"
                    class="form-check-input"
                    type="checkbox"
                    v-model="nowArticle.isPublic"
                  />
                  <label class="form-check-label" for="isPublic"
                    >是否公開</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="upArticleData">
            確認
          </button>
        </div>
      </div>
    </div>
    <pagination v-if="pagination>1" :pages="pagination" @emit-pages="getArticles"></pagination>
  </div>
  <!-- 刪除牌組 -->
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delArticles">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
import { Modal } from 'bootstrap'
import Pagination from '../../components/PaginationView.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
const { VITE_URL, VITE_PATH } = import.meta.env

let productModal = ''
let delProductModal = ''

export default {
  data () {
    return {
      articles: {},
      nowArticle: { tag: [''] },
      create_at: 0,
      isAddArticle: true,
      imgPath: '',
      pagination: {},
      page: 1,
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', 'typing', 'bold', 'italic', '|', 'link']
      }
    }
  },
  components: {
    Pagination
  },
  methods: {
    getArticles (page = 1) {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/admin/articles/?page=${page}`)
        .then((res) => {
          this.articles = res.data.articles
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    getArticle (id) {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/admin/article/${id}`)
        .then((res) => {
          this.openModel('edit', res.data.article)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    openModel (status, item) {
      if (status === 'add') {
        this.isAddArticle = true
        this.nowArticle = {}
        productModal.show()
      } else if (status === 'del') {
        this.nowArticle = item
        console.log(this.nowArticle)
        delProductModal.show()
      } else if (status === 'edit') {
        this.isAddArticle = false
        this.nowArticle = { ...item }
        productModal.show()
      }
    },
    upArticleData () {
      if (this.isAddArticle === true) {
        const createAt = Math.floor(new Date(this.create_at) / 1000)
        this.nowArticle = {
          ...this.nowArticle,
          isPublic: this.nowArticle.isPublic || false,
          create_at: createAt
        }
        this.$http
          .post(`${VITE_URL}v2/api/${VITE_PATH}/admin/article`, {
            data: this.nowArticle
          })
          .then((res) => {
            this.nowArticle = {}
            this.getArticles()
            productModal.hide()
          })
      } else if (this.isAddArticle === false) {
        this.$http
          .put(
            `${VITE_URL}v2/api/${VITE_PATH}/admin/article/${this.nowArticle.id}`,
            { data: this.nowArticle }
          )
          .then((res) => {
            this.nowArticle = {}
            this.getArticles()
            productModal.hide()
          })
      }
    },
    delArticles () {
      this.$http
        .delete(
          `${VITE_URL}v2/api/${VITE_PATH}/admin/article/${this.nowArticle.id}`
        )
        .then((res) => {
          this.nowArticle = {}
          this.getArticles()
          delProductModal.hide()
          alert(res.data.message)
        })
    },
    uploadImg (e) {
      const api = `${VITE_URL}v2/api/${VITE_PATH}/admin/upload`
      const file = this.$refs.fileInput.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', file)
      this.$http.post(api, formData).then((res) => {
        this.nowArticle.image = res.data.imageUrl
        this.$refs.fileInput.value = ''
        alert('圖片上傳成功')
      })
    }
  },
  mounted () {
    this.getArticles()
    productModal = new Modal(this.$refs.productModal, {
      keyboard: false
    })
    delProductModal = new Modal(this.$refs.delProductModal, {
      keyboard: false
    })
  }
}
</script>

<style scoped>
.ck-editor__editable_inline {
  min-height: 300px;
}
</style>
