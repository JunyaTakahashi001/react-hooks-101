import React, { useEffect, useState } from 'react'

const App = (props) => {
  const [state, setState] = useState(props)
  const {name, price} = state

  // useEffectの特徴
  // ・レンダリングの直後に毎回呼ばれる
  // ・第二引数に空の配列[]を渡すと最初の1回のみ呼ばれる
  // ・コンポーネント内に複数記述可能
  // ・特定の要素の状態が変更になった場合だけ実行させる指定可能

  // 初回のみ実行
  useEffect(() => {
    console.log('useEffect初回のみ')
  }, [])
  // レンダリング時実行
  useEffect(() => {
    console.log('useEffectレンダリング毎')
  })
  // 初回と特定の要素の状態が変更された場合のみ実行
  useEffect(() => {
    console.log('useEffect_name状態変更時のみ')
  }, [name])

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
