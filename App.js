const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"i m a h1 tag"),
            React.createElement("h2",{},"i m a h2 tag")]
    )
)

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

 root.render(parent)