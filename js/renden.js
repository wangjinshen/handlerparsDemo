define([
    '$',
    'handlebar',
    'hd'
], function ($, Handlebar ,hdbexpress) {
    
      function render(templa, data, dom) {
        //模板
        console.log(templa)
        var tpl = $(templa).html()
        
        //预编译模板
        var template = Handlebar.compile(tpl)
        //匹配内容
        console.log(data)
        console.log(template)
        var context = template(data)
        //输入模板

        $(dom).html(context)
    }


    return render
     
});