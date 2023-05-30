import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Order from './Order';
import renderer from "react-test-renderer"

describe('Order', () => {
    it('renders the order form', () => {
        const component = render(<Order />);

        // Assert that the form elements are rendered
        expect(component.getByLabelText('Product')).toBeInTheDocument();
        expect(component.getByLabelText('Amount')).toBeInTheDocument();
        expect(component.getByLabelText('Contact')).toBeInTheDocument();
        expect(component.getByLabelText('Your name')).toBeInTheDocument();
        expect(component.getByRole('button', { name: 'Order' })).toBeInTheDocument();
    });

    it('submits the order form', () => {
        const component = render(<Order />);

        // Simulate user input
        fireEvent.change(component.getByLabelText('Product'), { target: { value: 'Cake' } });
        fireEvent.change(component.getByLabelText('Amount'), { target: { value: '2' } });
        fireEvent.change(component.getByLabelText('Contact'), { target: { value: '123456789' } });
        fireEvent.change(component.getByLabelText('Your name'), { target: { value: 'John Doe' } });
    });
});
