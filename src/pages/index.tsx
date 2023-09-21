import { useState } from 'react'

// 각각의 게임 칸을 나타내는 컴포넌트
function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}

// 게임 보드를 나타내는 컴포넌트
function Board({ xIsNext, squares, onPlay }) {
    // 칸을 클릭할 때 호출되는 함수
    function handleClick(i) {
        // 게임이 종료되었거나 이미 칸이 채워져있으면 아무 동작도 하지 않음
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        // 다음 상태를 계산하기 위해 현재 상태를 복사
        const nextSquares = squares.slice()
        // 현재 차례에 따라 'X' 또는 'O'를 칸에 삽입
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        // 다음 상태를 상위 컴포넌트로 전달
        onPlay(nextSquares)
    }

    // 현재 게임 상태를 나타내는 문자열
    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = 'Winner: ' + winner
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                {/* 3x3 게임 보드 렌더링 */}
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleClick(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                />
            </div>
        </>
    )
}

// 게임 전체를 관리하는 컴포넌트
export default function Game() {
    // 게임 히스토리와 현재 턴을 관리하는 상태
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove]

    // 게임 진행 상태를 업데이트하는 함수
    function handlePlay(nextSquares) {
        // 새로운 히스토리를 만들어 현재 히스토리에 추가
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        // 현재 턴을 업데이트
        setCurrentMove(nextHistory.length - 1)
    }

    // 이동 기록 목록을 생성
    const moves = history.map((squares, move) => {
        let description
        if (move > 0) {
            description = 'Go to move #' + move
        } else {
            description = 'Go to game start'
        }
        return (
            <li key={move}>
                {/* 이동 기록을 클릭하면 해당 시점으로 이동 */}
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                {/* 보드 컴포넌트를 렌더링하고 현재 게임 상태 전달 */}
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

// 승자를 결정하는 함수
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    }
    return null
}
