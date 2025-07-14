import { cn } from '@/lib/utils'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'

const ContactSection = () => {
  return (
    <section id='contact' className='py-24 px-4 relative'>
      <div className='container mx-auto text-center max-w-5xl backdrop-blur-xs'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12'>Get In <span className='text-primary'>Touch</span></h2>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-12'>Contact Information</h3>
            <div className='space-y-8 justify-center mb-12'>
              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='w-6 h-6 text-primary'/>
                </div>
                <div className='text-start font-medium'>
                  <p>Email:</p>
                  <Link href="mailto:faizalfarisi67@gmail.com" className='hover:text-primary text-foreground transition-colors'>faizalfarisi67@gmail.com</Link>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='w-6 h-6 text-primary'/>
                </div>
                <div className='text-start font-medium'>
                  <p>Phone:</p>
                  <Link href="tel:+6289666070999" className='hover:text-primary text-foreground transition-colors'>+62 896-6607-0999</Link>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='w-6 h-6 text-primary'/>
                </div>
                <div className='text-start font-medium'>
                  <p>Location:</p>
                  <Link href="" className='hover:text-primary text-foreground transition-colors'>Pasuruan Regency, East Java, Indonesia</Link>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <p className='text-lg font-semibold'>Connect with Me</p>
              <div className='flex justify-center space-x-8'>
                <SiGithub className='w-6 h-6 hover:text-primary transition-colors'/>
                <SiLinkedin className='w-6 h-6 hover:text-primary transition-colors'/>
                <SiInstagram className='w-6 h-6 hover:text-primary transition-colors'/>            
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            // onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Faiz Alfarisi..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="myemail@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                // disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                {/* {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} /> */}
              </button>
            </form>
          </div>      
        </div>
      </div>

    </section>
  )
}

export default ContactSection