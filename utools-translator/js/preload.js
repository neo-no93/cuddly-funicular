
window.exports = {
    "trans": { // 注意：键对应的是 plugin.json 中的 features.code
       mode: "list",  // 列表模式
       args: {
          // 进入插件应用时调用（可选）
          enter: (action, callbackSetList) => {
             // 如果进入插件应用就要显示列表数据
             callbackSetList(
               [
                   {
                      title: '微软翻译',
                      description: 'bing',
                      icon:'', // 图标(可选)
                      url: "https://cn.bing.com/translator"
                   },
                   {
                     title: '百度翻译',
                     description: 'baidu',
                     icon:'', // 图标(可选)
                     url: "https://fanyi.baidu.com/"
                  },
                  {
                     title: 'DeepL',
                     description: 'DeepL',
                     icon:'', // 图标(可选)
                     url: "https://https://www.deepl.com/zh/translator.baidu.com/"
                  },
                  {
                     title: '剑桥英语',
                     description: 'cambrigde',
                     icon:'', // 图标(可选)
                     url: "https://dictionary.cambridge.org/zhs/translate/://fanyi.baidu.com/"
                  },
                  {
                     title: '有道翻译',
                     description: 'youdao',
                     icon:'', // 图标(可选)
                     url: "https://fanyi.youdao.com/"
                  }
             ]
             )
          },
          // 子输入框内容变化时被调用 可选 (未设置则无搜索)
          search: (action, searchWord, callbackSetList) => {
             // 获取一些数据
             // 执行 callbackSetList 显示出来
             callbackSetList([
                {
                   title: '微软翻译',
                   description: 'bing',
                   icon:'', // 图标
                   url: 'https://cn.bing.com/translator'
                }
             ])
          },
          // 用户选择列表中某个条目时被调用
          select: (action, itemData, callbackSetList) => {
             window.utools.hideMainWindow()
             const url = itemData.url
             window.utools.ubrowser.goto(url)
             .run({ width: 1000, height: 600 })
             window.utools.outPlugin()
          },
          // 子输入框为空时的占位符，默认为字符串"搜索"
          placeholder: "搜索"
       } 
    }
 }