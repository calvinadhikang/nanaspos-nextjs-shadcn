'use client'

import InputLabel from "@/components/InputLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage(){
    const [username, setUsername] = useState({value: "", errorLabel: ""})
    const [password, setPassword] = useState({value: "", errorLabel: ""})
    const [name, setName] = useState({value: "", errorLabel: ""})

    return (
        <div className="max-w-4xl p-4 rounded-lg shadow-md bg-slate-50">
            <h1 className="text-2xl font-bold text-center mb-5">Register</h1>
            <div className="mb-3">
                <label>Name*</label>
                <Input 
                    value={name.value} 
                    onChange={(e) => {
                        let value = e.target.value
                        let errorLabel = ""
                        if (value == "") {
                            errorLabel = "Please fill in your name"
                        }

                        setName({
                            value: e.target.value,
                            errorLabel: errorLabel
                        })
                    }}
                    className={name.errorLabel != "" ? 'border-red-400 focus:border-0' : ''}
                />
                <label className="text-xs text-red-500">{name.errorLabel}</label>
            </div>
            <div className="mb-3">
                <label>Username*</label>
                <Input 
                    value={username.value} 
                    onChange={(e) => {
                        let value = e.target.value
                        let errorLabel = ""
                        if (value == "") {
                            errorLabel = "Please fill in your username"
                        }

                        setUsername({
                            value: e.target.value,
                            errorLabel: errorLabel
                        })
                    }}
                    className={username.errorLabel != "" ? 'border-red-400 focus:border-0' : ''}
                />
                <label className="text-xs text-red-500">{username.errorLabel}</label>
            </div>
            <div className="mb-3">
                <label>Password*</label>
                <Input 
                    value={password.value} 
                    onChange={(e) => {
                        let value = e.target.value
                        let errorLabel = ""
                        if (value == "") {
                            errorLabel = "Please fill in your password"
                        }

                        setUsername({
                            value: e.target.value,
                            errorLabel: errorLabel
                        })
                    }}
                    className={password.errorLabel != "" ? 'border-red-400 focus:border-0' : ''}
                />
                <label className="text-xs text-red-500">{password.errorLabel}</label>
            </div>
            <Button className="mt-5 w-full mb-8">Sign Up</Button>
            <div className="text-xs text-center">Already have an Account? <Link className="font-semibold text-blue-500 hover:underline" href={'/login'}>Sign In</Link></div>
        </div>
    )
}