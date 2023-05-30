import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';
import {render} from "@testing-library/react"

describe('Navbar component', () => {
    it('renders correctly', () => {
        const component = renderer.create(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('changes state when clicked', () => {
        const component = renderer.create(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const instance = component.root.findByType(Navbar).instance;
        expect(instance.state.clicked).toBe(false);

        instance.handleClick();
        expect(instance.state.clicked).toBe(true);

        instance.handleClick();
        expect(instance.state.clicked).toBe(false);
    });

    test('should render correct number of links', () => {
        const component = render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        // Find the navbar element
        const links = component.getAllByRole('link');

        // Assert the number of links
        expect(links.length).toBe(4);
    });
});
