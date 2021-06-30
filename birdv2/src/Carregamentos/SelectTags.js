
import { Select } from 'antd';
import { set } from 'js-cookie';
import React, { useState } from 'react';
const { Option } = Select;

function SelectTags(props){
  const lista =['Maria','Joao','Carla']
  const listacom = []
  return(
      <>
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Selecione as tags"
    optionLabelProp="label"
  >
    {lista.forEach(element => {
        listacom.push(
        <Option value={element} label={element}>
          <div className="demo-option-label-item">
            <span role="img" aria-label="Morador">
              {element}
            </span>
          </div>
        </Option>
        )
    })}
    {listacom}
  </Select>,
  </>
  )}
  export default SelectTags;