import React from 'react';
import Panel from "./panel";
import renderer from 'react-test-renderer';
import {mockData} from "../acordion/mockdata";

it('it match snapshot', () => {
    const {categories} = mockData;
    const variants = categories[1].items[1].items[1].variants;
    const tree = renderer
        .create(<Panel data={variants} visible={true}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});