import React, { Component } from 'react';

// 1️⃣ Define interfaces for props and state
interface CounterProps {
  // No props in this case, so leave empty or omit entirely
}

interface CounterState {
  count: number; // The state has one field: count
}

// 2️⃣ Use generic types to type the class component
class Counter extends Component<CounterProps, CounterState> {
  // 3️⃣ Properly typed state using the CounterState interface
  state: CounterState = {
    count: 0,
  };

  // 4️⃣ Increment method doesn't return anything, so type as void
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
