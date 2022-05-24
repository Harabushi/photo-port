import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
     />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
  
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
     />);
    // following the import of screen up top fails the test, so something is going wrong
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
  it('inserts text into the links', () => {
    // Arrange
    const { getByTestId } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
     />);
    // Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
})