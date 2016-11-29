function Type(obj, speed, welcome){
			this.obj = obj;
			this.speed = speed;
			this.welcome = welcome;
		}
		Type.prototype = {
			init : function(){
				var str = this.obj.html();
				this.obj.html(this.welcome);
				this.add(str);	
			},
			add : function(con){
				var me = this;
				var str;
				var strlen = 0;
				var t = setInterval(function(){
					if(con!=null)
					{
						str = con.substr(0, strlen) + "_";
						me.obj.html(str);					
						//内容打印完毕
						if(strlen == con.length){
							clearInterval(t);
						}
						strlen = strlen + 1;
					}
				}, me.speed);
			}
		}