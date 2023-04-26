we can easily make accordion by react.

jsx: 
``` jsx
const FAQ2 = () => {
     const [selected, setSelected] = useState(0)
     const data =[
          {
               Question: "Question",
               Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta fugiat qui sequi voluptates aut a architecto culpa, doloribus eligendi vel numquam! Magni necessitatibus ullam distinctio cupiditate ea fugit molestiae."
          },
          {
               Question: "Question",
               Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta fugiat qui sequi voluptates aut a architecto culpa, doloribus eligendi vel numquam! Magni necessitatibus ullam distinctio cupiditate ea fugit molestiae."
          },
          {
               Question: "Question",
               Answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos soluta fugiat qui sequi voluptates aut a architecto culpa, doloribus eligendi vel numquam! Magni necessitatibus ullam distinctio cupiditate ea fugit molestiae."
          }
     ]

     const toggle = (i) =>{
          if(selected === i){
               return setSelected(null)
          }

          setSelected(i)
          console.log(selected)
     }

     return (
          <div className='my-10'>
               <div className='max-w-3xl'>
                    {
                         data.map((accordion, i)=>(
                              <div className='item bg-primary/70 my-2'>
                                   <div onClick={()=>toggle(i)} className='flex justify-between items-center p-3 '>
                                        <h2>{accordion.Question}</h2>
                                        <span>+</span>
                                   </div>
                                   <div className={`${selected === i ? "content show" : "content"}`}>
                                        <p>{accordion.Answer}</p>
                                   </div>
                              </div>
                         ))
                    }
               </div>
          </div>
     );
};

export default FAQ2;

```

css: 
```css
.content {
     max-height: 0;
     overflow: hidden;
     transition: all 0.5s cubic-bezier(2,0,2,0);
}

.content.show{
     height: auto;
     max-height: 9999px;
     transition: all 0.5s cubic-bezier(1,0,1,0);
}
```