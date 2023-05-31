import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
    test('renders the hero section with the correct content', () => {
        const heroSection = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Assert that the subhead is rendered with the correct text
        const subhead = heroSection.getByText("It's Easily & Tasty");
        expect(subhead).toBeInTheDocument();

        // Assert that the hero heading is rendered with the correct text
        const heroHeading = heroSection.getByText('Have a minute — have a cake');
        expect(heroHeading).toBeInTheDocument();

        // Assert that the create dessert link is rendered with the correct text and URL
        const createDessertLink = heroSection.getByRole('link', { name: 'Create dessert' });
        expect(createDessertLink).toBeInTheDocument();
        expect(createDessertLink).toHaveAttribute('href', '/order');

        // Assert that the Instagram link is rendered with the correct text and URL
        const instagramLink = heroSection.getByRole('link', { name: 'Instagram' });
        expect(instagramLink).toBeInTheDocument();
        expect(instagramLink).toHaveAttribute('href', '/');
    });

    test('renders the testimonials section with the correct content', () => {
        const heroSection = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Assert that the testimonials section is rendered
        const testimonialsSection = heroSection.getByTestId('testimonialsSection');
        expect(testimonialsSection).toBeInTheDocument();

        // Assert that all the fact items are rendered with the correct content
        const factItems = heroSection.getAllByTestId('factItem');
        expect(factItems).toHaveLength(3);

        const firstFactItem = factItems[0];
        expect(firstFactItem).toHaveTextContent(
            "Did you know that the world's largest cupcake ever made weighed a whopping 1,224.65 kg (2,700 lbs) and measured 1.2 meters (4 feet) tall?"
        );
    });
});
