// translate router.meta.title, be used in breadcrumb sidebar tagsview
// 将路由定义中的meta标题渲染至导航栏
export function generateTitle(title) {
    const hasKey = this.$te('route.' + title)
    const translatedTitle = this.$t('route.' + title) // $t :this method from vue-i18n, inject in @/lang/index.js
    if (hasKey) {
      return translatedTitle
    }
    return title
  }