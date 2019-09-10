import React from 'react';

// This is a functional component
// const WithClass = props => (
//   <div className={props.classes}>{props.children}</div>
// )

// This is a normal function that returns a component
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withClass;