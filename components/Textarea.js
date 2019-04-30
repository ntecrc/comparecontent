import React from 'react';
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaExample = () => (
  <div>
    <Form>
      <TextArea rows={50} placeholder='TRC Site...' style={{ minHeight: 50, height: '100%',width: 600, marginTop: 80, marginLeft: 20, marginRight: 10}}/>
      <TextArea rows={50} placeholder='Client Site...' style={{ minHeight: 50, height: '100%', width: 600, marginTop: 80}}/>
    </Form>
  </div>
  
)

export default TextAreaExample