import React from 'react';
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaExample = () => (
  <div>
    <Form style={{flex: 1}}>
    <TextArea placeholder='TRC Site...' style={{ minHeight: 500, width: 600, marginTop: 80, marginLeft: 20, marginRight: 10}}/>
    <TextArea placeholder='Client Site...' style={{ minHeight: 500, width: 600, marginTop: 80}}/>
    </Form>
  </div>
  
)

export default TextAreaExample