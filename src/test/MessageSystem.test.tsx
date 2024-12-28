import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MessagePreview } from '../components/MessagePreview';
import { BrowserRouter } from 'react-router-dom';

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('Message System', () => {
  it('renders MessagePreview with default state', () => {
    render(
      <TestWrapper>
        <MessagePreview
          title=""
          message=""
          template="minimal"
          image={null}
          font="font-inter"
        />
      </TestWrapper>
    );
    
    expect(screen.getByText(/Here will be your awesome message/i)).toBeInTheDocument();
  });
});