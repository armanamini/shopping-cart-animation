import React from 'react'

const Input = React.forwardRef((props,ref) => {
  return (
    <div>
        <label htmlFor={props.input.id}></label>
        <input style={{outline:'none',padding:'5px 10px',width:'80%',border:'none',background:'transparent'}} ref={ref} {...props.input}/>
    </div>
  )
})

export default Input