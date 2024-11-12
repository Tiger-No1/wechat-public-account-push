/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc5fe5933ef252457',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '93724efd9c84ebae9f18654bc8a7aeae',

  PROVINCE: '天津',
  CITY: '天津',

  USERS: [
    {
      // 想要发送的人的名字
      name: '买狗粪的',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_3Yf667CaEC1Jf-lz299NBV3XYU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'VfpsEGkihjGLkHjaPhmfeLaNlLKTIlgCiT3rxZUSMrg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '卖狗粪的', year: '2000', date: '04-07',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '你全宇宙最帅的老公', year: '1998', date: '05-17',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '07-27',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-07-27' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'ZyKI8HPCdF9xcTFHBxLJaEXp5G7yD0W-kANWiRMqSXs',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o_3Yf6xnqhwsrM_ZDw7jmR4oH4eA',
    }
  ],

}

module.exports = USER_CONFIG

