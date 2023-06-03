import React from 'react';

export const MyMessage = ({message}) => {
  if(message.attachments && message.attachments.length>0){
    return(
      <img
      src={message.attachments[0].file}
      className='message-image' 
      style={{float:"right"}}
      alt='message-attachment'
      />
    );
  }
  return (
    <div
    className='message'
    style={{
      float:"right",
      marginRight:"18px",
      color:"white",
      backgroundClor:"#3B2A50"

    }}>
      {message.text}
    </div>
  )
}
