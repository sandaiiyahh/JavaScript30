html {
    box-sizing: border-box;
    background: url("oh-la-la.jpeg") center no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Futura, "Trebuchet MS", Arial, sans-serif;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  svg {
    fill: white;
    background: rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 50%;
    width: 200px;
    margin-bottom: 50px;
  }
  
  .wrapper {
    padding: 20px;
    max-width: 350px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin: 0;
    font-weight: 200;
  }
  
  .plates {
    margin: 0;
    padding: 0;
    text-align: left;
    list-style: none;
  }
  
  .plates li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px 0;
    font-weight: 100;
    display: flex;
  }
  
  .plates label {
    flex: 1;
    cursor: pointer;
  }
  
  .plates input {
    display: none;
  }
  
  .plates input + label:before {
    content: "⬜️";
    margin-right: 10px;
  }
  
  .plates input:checked + label:before {
    content: "🌮";
  }
  
  .add-items {
    margin-top: 20px;
  }
  
  .add-items input {
    padding: 10px;
    outline: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }