import React from 'react';
import Accordion from "./accordion";
import renderer from 'react-test-renderer';
import {mockData} from "./mockdata";

it('it match snapshot', () => {
    const {categories} = mockData;
    const tree = renderer
        .create(<Accordion data={categories}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});