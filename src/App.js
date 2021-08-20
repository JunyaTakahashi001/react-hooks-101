import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  // 現在の値を元に処理する（引数で現在の値を取得できる[previousCount]の部分）
  const increment2 = () => setCount(previousCount =>  previousCount + 1)
  const decrement2 = () => setCount(previousCount =>  previousCount - 1)
  // リセット
  const reset = () => setCount(0)

  const double = () => setCount(count *2)

  const divide3 = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  })

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  )
}

export default App
