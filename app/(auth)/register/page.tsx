'use client'

import InputLabel from "@/components/InputLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage(){
    const [username, setUsername] = useState({value: "", errorLabel: ""})
    const [password, setPassword] = useState({value: "", errorLabel: ""})
    const [name, setName] = useState({value: "", errorLabel: ""})
    const { toast } = useToast()

    const register = async () => {
        if (username.value == "" || password.value == "" || name.value == "") {
            toast({
                title: "Uh oh! Inputs musn't be empty.",
                description: "Make sure to fill out all the inputs.",
                variant: "destructive",
            })
            return
        }

        const response = await fetch('http://localhost:3000/api/user', {
            method: 'POST',
            body: JSON.stringify({
                name: name.value, 
                username: username.value, 
                password: password.value
            })
        })
        const {error, message} = await response.json()
        if (!error) {
            toast({
                title: "Register Successful",
                description: message
            })
        }else{
            toast({
                title: "Register Failed!",
                description: message,
                variant: "destructive"
            })
            setUsername({value: "", errorLabel: message})
        }
    }

    return (
        <>
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

                        setPassword({
                            value: e.target.value,
                            errorLabel: errorLabel
                        })
                    }}
                    className={password.errorLabel != "" ? 'border-red-400 focus:border-0' : ''}
                />
                <label className="text-xs text-red-500">{password.errorLabel}</label>
            </div>
            <Button className="mt-5 w-full mb-8" onClick={register}>Sign Up</Button>
            <div className="text-xs text-center">Already have an Account? <Link className="font-semibold text-secondary-foreground hover:underline" href={'/login'}>Sign In</Link></div>
        </>
    )
}