import React from 'react'
import { Provider, atom, useAtom, useSetAtom } from 'jotai'

export const myPostAtom = atom([])
export const editingPostIndexAtom = atom(-1)
