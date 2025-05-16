import { render } from '@testing-library/react';
import HeaderSection from './HeaderSection';

describe('HeaderSection.tsx', () => {
    const mockProps = {
        title: 'Welcome to Devroots',
        subtitle: 'Build faster with our tools and docs.',
        srcPath: 'test-image.png',
        rounded: true,
    };

    it('renders title, subtitle, and image correctly', async () => {
        const { findByText, getByAltText } = render(<HeaderSection {...mockProps} />);

        // Check title
        expect(await findByText(mockProps.title)).toBeInTheDocument();

        // Check subtitle
        expect(await findByText(mockProps.subtitle)).toBeInTheDocument();

        // Check image
        const image = getByAltText('Developer Computer');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', mockProps.srcPath);

        // Check rounded image
        expect(image).toHaveStyle('border-radius: 50%');
    });

    it('renders default image and no rounding when props are not passed', () => {
        const { getByAltText } = render(
            <HeaderSection title="Default Title" subtitle="Default Subtitle" />,
        );

        const image = getByAltText('Developer Computer');
        expect(image).toBeInTheDocument();
        expect(image.getAttribute('src')).toContain('headerSectionLogo');
        expect(image).toHaveStyle('border-radius: 0');
    });
});
