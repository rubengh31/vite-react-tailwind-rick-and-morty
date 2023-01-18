import Span from '../../src/components/Span';

describe('<Span />', () => {
  it('renders', () => {
    cy.mount(<Span />);
  });

  it('supports an "className" and "children" prop to set the value', () => {
    cy.mount(<Span className={''} children={''} />);
    cy.get('[data-cy=span]').should('have.text', '');
  });
});
