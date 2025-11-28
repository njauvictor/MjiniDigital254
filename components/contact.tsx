import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-20">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Help us route your inquiry</h1>

                <div className="grid border md:grid-cols-2 md:gap-4">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12 text-center items-center">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">Collaborate</h2>
                            <Link
                                href="mailto:info@mjinidigital.co.ke"
                                className="gap-4 flex items-center justify-center text-lg text-blue-600 hover:underline dark:text-blue-400">
                                <Mail /> info@mjinidigital.co.ke
                            </Link>
                            <div className="gap-4 flex items-center justify-center text-lg text-blue-600 hover:underline dark:text-blue-400 mt-4">
                                <Phone /> 
                                <span>+254 768 495336</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12 text-center items-center">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">Support</h2>
                            <Link
                                href="mailto:support@mjinidigital.co.ke"
                                className="gap-4 flex items-center justify-center text-lg text-blue-600 hover:underline dark:text-blue-400">
                                <Mail /> mjinidigital@gmail.com
                            </Link>
                            <div className="gap-4 flex items-center justify-center text-lg text-blue-600 hover:underline dark:text-blue-400 mt-4">
                                <Phone /> 
                                <span>+254 729 396862</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <form
                    action=""
                    className="border px-4 py-12 lg:px-0 lg:py-24">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold">Let&apos;s get you to the right place</h3>
                        <p className="mt-4 text-sm">Reach out to our sales team! We&apos;re eager to learn more about how you plan to use our application.</p>

                        <div className="mt-12 space-y-6">
                            <div className="space-y-3">
                                <Label htmlFor="name">Full name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="email">Work Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="country">Country/Region</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ke">Kenya</SelectItem>
                                        <SelectItem value="ug">Uganda</SelectItem>
                                        <SelectItem value="tz">Tanzania</SelectItem>
                                        <SelectItem value="cd">DR Congo</SelectItem>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="uk">UK</SelectItem>
                                        
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="website">Company Website</Label>
                                <Input
                                    type="url"
                                    id="website"
                                />
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="job">Job function</Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a job function" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="finance">Finance</SelectItem>
                                        <SelectItem value="education">Education</SelectItem>
                                        <SelectItem value="legal">Legal</SelectItem>
                                        <SelectItem value="healthcare">Healthcare</SelectItem>
                                        <SelectItem value="technology">Technology</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-3">
                                <Label htmlFor="msg">Message</Label>
                                <Textarea
                                    id="msg"
                                    rows={3}
                                />
                            </div>
                            <Button type="submit" className="w-full">Submit</Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}