
    function Dom(str,selector){
        this.str=str || "";
        this.selector=selector || "";
    }
    Dom.prototype={
        htmlStr:function(){
            return this.str;
        },
        addEventListener:function(eventName,callback){
            $("body").on(eventName,this.selector,callback);
        }
    };
    Dom.prototype.constructor=Dom;
    
    function DevPage(eleId){
        this.container=eleId;
    }
    DevPage.prototype={
        initHTML:function(){
            var initData;
            /*
            initiate page's html;
            let initData be potential produced data during the process;
            the process may be sync/async;
            */
            /*
            create Dom's instances for later demands;
            you can add event for new Doms in initBindEvent;
            */
            this.asyncHTML(initData);
            this.initBindEvent(initData);
        },
        initBindEvent:function(initData){
            
        },
        asyncHTML:function(initData){
            var asyncData;
            /*
            after page's initial process,extended contents may be required;
            let asyncData be potential produced data during this process;
            */
            this.asyncBindEvent(asyncData);
        },
        asyncBindEvent:function(asyncData){

        }
    }
    DevPage.prototype.constructor=DevPage;