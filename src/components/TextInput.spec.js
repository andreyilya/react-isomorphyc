import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  it('should display label', () => {
    let model = {
      a: '10',
    };

    const wrapper = mount(<TextInput value={model.a} name="test" label="label" onChange={()=>{}}/>);
    console.log(wrapper.debug()); // View shallowly rendered component
    const actual = wrapper.find('label').html();
    const expected = '<label class="col-sm-4 control-label">label</label>';

    expect(actual).to.equal(expected);
  });

});
