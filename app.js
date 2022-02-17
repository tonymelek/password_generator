const types={
            lower: 'qwertyuiopasdfghjklzxcvbnm',
            upper: 'QWERTYUIOPASDFGHJKLZXCVBNM',
            digits: '0123456789',
            special: '!@#$%^&*()'
        }

const app = {
    data:()=>({
        chars:0,
        charTypes: [],
        numbers:0    
        }),

    computed: {
        pickRandomOfSelected(){
            return this.charTypes.map(type=>{
                const random=Math.floor(Math.random()*types[type].length);
                return types[type][random]
            })
        },
        pickRandomOfAll(){
            if(this.chars-this.charTypes.length<1)return []
            let all='';
            for(let type of this.charTypes){
                all+=types[type]
            }
            let remaining=[]
            for( let i=0; i<this.chars-this.charTypes.length;i++){
                const random=Math.floor(Math.random()*all.length);
                remaining.push(all[random])
            }
            return remaining;
        },
        result(){
            if(this.chars===0) return ''
            return [...this.pickRandomOfAll,...this.pickRandomOfSelected]
            .sort(() => Math.random() - 0.5).join('')
        }       
    },
    methods: {
        
        }
      

    

}
Vue.createApp(app).mount('#app')