/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx725c5528db0bcac2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '714cb9f4d71c3094bd03396182695754',

  PROVINCE: '浙江',
  CITY: '丽水',

  USERS: [
    {
      // 想要发送的人的名字
      name: '柔柔',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7YbB6getzfg6cikve4CnFC88MGQ',
      id: 'o7YbB6rSQfI5jUVkPAKsBHK4ENxk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ZpkLEoSC4HhMngppuCSU1uslQKpl60RbtQP-JWS4W48',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-13',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2004', date: '08-30',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '柔柔', year: '2004', date: '10-13',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '10-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-24' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'TugW3R8CShnPB9CRXN6kwYkheWshVrOHpaq0DeCZ0cw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7YbB6rSQfI5jUVkPAKsBHK4ENxk',
    }
  ],

}

module.exports = USER_CONFIG

