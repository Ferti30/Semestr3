"use client";
import * as React from "react"

import { useMutation } from "convex/react";
import Image from "next/image";
import { useState } from "react";
import { api } from "../convex/_generated/api";
import { useQuery } from 'convex/react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"







export default function Home() {
    const [text, setText] = useState("");
    const createTodo = useMutation(api.todos.createTodo);
    const todos = useQuery(api.todos.getTodos);
    return (

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            
            <div>
                {todos?.map(todo => {
                    return <div key={todo._id}>{todo.text}</div>;
                }) }
                <form onSubmit={(e) => {
                    e.preventDefault();
                    createTodo({
                        text,
                    });
                }}
                >
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input value={text} onChange={(e) => setText(e.target.value)}
                />
                        <Button>create</Button>
             </div>
                </form>
            
            </div>
        </main>
    );
}