"use client";
import * as React from "react"

import { useMutation } from "convex/react";
import Image from "next/image";
import { useState } from "react";
import { api } from "../convex/_generated/api";
import { useQuery } from 'convex/react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"





export default function Home() {
    const [text, setText] = useState("");
    const createTodo = useMutation(api.todos.createTodo);
    const todos = useQuery(api.todos.getTodos);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTodo({
            text,
        });
        setText("");
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
            <div>
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Tabela z bazy Convex z możliwością dodawania wpisów
                </h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[400px]">Tabela z bazy Convex</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {todos?.map((todo, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{todo.text}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <form onSubmit={handleSubmit}>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input value={text} onChange={(e) => setText(e.target.value)} />
                        <Button type="submit">Dodaj wpis</Button>
                    </div>
                </form>
            </div>
        </main>
    );
}
