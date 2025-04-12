"use client"
import '@/styles/components/enquireform.css'
import { useEffect } from "react";
export default function EnquireForm({ className="", buttonType="" }) {
    useEffect(() =>  {
            const inputBoxes = document.querySelectorAll('.form-control')
            inputBoxes.forEach(inputBox => {
                inputBox.addEventListener('focus', function() {
                    this.closest('.form-group')?.classList.add('active')
                    this.classList.add('valid')
                })
            })
    
            return () => {
                inputBoxes.forEach(inputBox => {
                    inputBox.removeEventListener('focus', function() {
                        this.closest('.form-group')?.classList.add('active')
                        this.classList.add('valid')
                    })
                })
            }
        }, [])
    return (
        <form action="" className={`form form-grid ${className}`}>
            <div className="form-group">
                <input type="text" name="name" className='form-control' id="" />
                <label htmlFor="">Name</label>
            </div>
            <div className="form-group">
                <input type="email" name="email" className='form-control' id="" />
                <label htmlFor="">Email</label>
            </div>
            <div className="form-group">
                <input type="tel" name="phone" className='form-control' id="" />
                <label htmlFor="">Phone</label>
            </div>
            <div className="form-group">
                <input type="text" name="country" className='form-control' id="" />
                <label htmlFor="">Country</label>
            </div>
            <div className="form-group full">
                <textarea name="" id="" className='form-control'></textarea>
                <label htmlFor="">Message</label>
            </div>
            <div className="btn-wrap full">
                <button className={`btn w-100 ${buttonType}`}>Submit</button>
            </div>
        </form>
    )
}