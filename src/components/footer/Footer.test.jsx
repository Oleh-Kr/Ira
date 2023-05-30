import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Footer';

describe('Contact component', () => {
    it('renders contact form and maps', () => {
        render(<Contact />);

        // Check if the contact form elements are rendered
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Message')).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument();

        // Check if the small and big maps are rendered
        expect(screen.getAllByTitle('map').length).toBe(2);
    });
});
