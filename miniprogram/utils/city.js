var city_data = {
  "大数据与信息工程学院": {
    
    "计算机科学与技术": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "人工智能": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "数据科学与大数据技术": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "物联网工程": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "信息管理与信息系统": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
  },
  "法学院":{
    
    "法学": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
  },
  "建筑工程学院": {
    
    "城乡规划":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "工程管理":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "工程造价":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "建筑学": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "土木工程":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
  },
  "经济与管理学院": {
   
    "财务管理": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "电子商务": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "非物质文化遗产保护": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "旅游管理": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "农村区域发展": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "农艺教育":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "人力资源管理": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "市场营销": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "文化产业管理":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
    "行政管理":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
  },
   "体育与艺术学院": {
   
        "动画":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "环境设计": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "美术学":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "视觉传达设计":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "体育教育": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "舞蹈表演":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "休闲体育":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "音乐学": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
      },
      "文学与新闻传播学院": {
      
        "广播电视编导": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "汉语国际教育": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "汉语言文学": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "网络与新媒体": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "新闻学":  {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "学前教育": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
        "英语": {1:"1班",2:"2班",3:"3班",4:"4班",5:"5班",6:"6班",7:"7班"},
      },

};


function getCity() {
  return city_data;
}

module.exports = {
  getCity: getCity
}