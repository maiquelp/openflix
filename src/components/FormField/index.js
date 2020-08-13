import React from 'react';

import {FormFieldWrapper, Label, Input} from './styles';

function FormField({label, type, value, name, onChange, suggestions}) {

  const fieldId = `id_${name}`;

  const tag = type === 'textarea' ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);

  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
        <Label htmlFor={fieldId}>
          <Input 
            as={tag} 
            id={fieldId}
            type={type} 
            value={value} 
            name={name} 
            hasValue={hasValue}
            onChange={onChange} 
            autoComplete={hasSuggestions ? 'off' : 'on'}
            list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined} 
          />
          <Label.Text>
            {label}
          </Label.Text>
          {hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((element) => (
                  <option value={element} key={`suggestionFor_${fieldId}_option${element}`}> 
                    {element}
                  </option>
                ))
              }
            </datalist>
          )}

        </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

export default FormField;