import Head from 'next/head';
import Footer from '@/components/Footer/Footer';
import photo from '../../assets/slider-3.webp';
import president from '../../assets/higgins.png';
import eighthPageIcon from '../../assets/eighthPageIcon.png';
import secondPageIcon from '../../assets/secondPageIcon.png';
import Header from '@/components/Header/Header';
import backspaceIcon from '../../assets/backspace.svg'
import arrowUpIcon from '../../assets/arrow-up.svg'
import enterIcon from '../../assets/enter.svg'
import keyboardIcon from '../../assets/keyboard-icon.svg'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


const contentPageSixth = [
  {id: 1, name: 'Micheal D Higgins', position: 'President', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: president},
  {id: 2, name: 'Katie Taylor2', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: president},
  {id: 3, name: 'Katie Taylor3', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 4, name: 'Katie Taylor4', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 5, name: 'Katie Taylor5', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 6, name: 'Katie Taylor6', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 7, name: 'Katie Taylor7', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 8, name: 'Katie Taylor8', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
  {id: 9, name: 'Katie Taylor9', position: 'gold medal winner at the olympic games', words: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra aliquam leo, vel vestibulum leo tempor eu. Mauris dolor erat, convallis et aliquet et, efficitur mollis eros. Cras fringilla, ligula convallis ultricies accumsan, dui lacus malesuada mauris.', photo: photo},
];

const firstColumn = [
  {keyValue: 'q', keyValueNumber: '1'},
  {keyValue: 'w', keyValueNumber: '2'},
  {keyValue: 'e', keyValueNumber: '3'},
  {keyValue: 'r', keyValueNumber: '4'},
  {keyValue: 't', keyValueNumber: '5'},
  {keyValue: 'y', keyValueNumber: '6'},
  {keyValue: 'u', keyValueNumber: '7'},
  {keyValue: 'i', keyValueNumber: '8'},
  {keyValue: 'o', keyValueNumber: '9'},
  {keyValue: 'p', keyValueNumber: '0'},
  {keyValue: 'backspace', keyValueNumber: 'backspace', keyImage: backspaceIcon},
];
// ~!$%^&*_=+}{'?-.
// ?.

const secondColumn = [
  {keyValue: 'a', keyValueNumber: '~'},
  {keyValue: 's', keyValueNumber: '!'},
  {keyValue: 'd', keyValueNumber: '$'},
  {keyValue: 'f', keyValueNumber: '%'},
  {keyValue: 'g', keyValueNumber: '^'},
  {keyValue: 'h', keyValueNumber: '&'},
  {keyValue: 'j', keyValueNumber: '*'},
  {keyValue: 'k', keyValueNumber: '_'},
  {keyValue: 'l', keyValueNumber: '='},
  {keyValue: ';', keyValueNumber: ';'},
  {keyValue: 'enter', keyImage: enterIcon},
];

const thirdColumn = [
  {keyValue: 'row up', keyImage: arrowUpIcon },
  {keyValue: 'z', keyValueNumber: '+'},
  {keyValue: 'x', keyValueNumber: '}'},
  {keyValue: 'c', keyValueNumber: '{'},
  {keyValue: 'v', keyValueNumber: "'"},
  {keyValue: 'b', keyValueNumber: '-'},
  {keyValue: 'n', keyValueNumber: '<'},
  {keyValue: 'm', keyValueNumber: '>'},
  {keyValue: ',', keyValueNumber: ','},
  {keyValue: '.', keyValueNumber: '.'},
  {keyValue: '?', keyValueNumber: '?'},
  {keyValue: 'row up', keyImage: arrowUpIcon },
];

const fourthColumn = [
  {keyValue: '&123'},
  {keyValue: 'ctrl'},
  {keyValue: '@'},
  {keyValue: 'space'},
  {keyValue: '<'},
  {keyValue: '>'},
  {keyValue: 'keyboard', keyImage: keyboardIcon},
];

const Tenth = () => {
  const [email, setEmail] = useState('');
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  let usernameRef = email;

  if (email !== '') {
    inputRef.current?.focus();
  }

  const writeEmail = (value: string) => {
    if (value === 'backspace') {
      setEmail(email.slice(0, -1));
      return;
    }

    if (value === 'enter' || value === 'ctrl') {
      return;
    }

    if (value === 'row up') {
      setIsUpperCase(!isUpperCase);
      return;
    }

    if (value === '&123') {
      setIsSymbols(true);
      return
    }

    if (value === 'keyboard') {
      setIsSymbols(false);
      return
    }

    if (value === 'space') {
      setEmail(email => email + '')
      return
    }

    setEmail(email => email + value);
  }

  const validateEmail = (value: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    console.log('!emailRegex.test(value)', !emailRegex.test(value));
    // (emailRegex.test(value))
    setShowError(!emailRegex.test(value));
    // setIsSubmitting(false);
  }

  async function handleSubmit (e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) {
      return; // Prevent multiple submissions
    }
    setIsSubmitting(true);

    validateEmail(email);
    console.log(showError);
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      return;
    }

    let userEmail = email;
    //Some form Validation
    if (!userEmail) {
      alert("Failed: Ensure to fill all form inputs");
      return;
    }
    // Clear the form inputs after submit
    usernameRef="";

    const formValues = { userEmail };
    let result;
    try {
      let data = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      result = await data.json();
    } catch (error) {
      result = { message: `Failed: ${error}` };
    }

    // alert(result.message);
    setShowSuccess(true);
    setIsSubmitting(false);

    setEmail('');
  }

  useEffect(() => {
    document.body.style.background = '#5787cc';
    
    if (showError) {
      const timeoutId = setTimeout(() => {
        setShowError(false);
        setIsSubmitting(false);
      }, 3000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }

    if (showSuccess) {
      const timeoutId = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showError, showSuccess]);

  // console.log(showError);
  

  return (
    <>
      <Head>
        <title>Thomas F Meagher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <main className="tenth-page" >
        <Header />

        <div className="tenth-page-main">
          <h2 className="tenth-page-main-title">
            Enter your email address to receive the Protocol for the national flag
          </h2>
          <div className="tenth-page-main-form-wrapper">
            <form action="" className="tenth-page-main-form" onSubmit={handleSubmit}>
             <input 
              type="text"
              placeholder="your email address"
              className="tenth-page-main-form-input" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              // autoFocus
              // required
              ref={inputRef}
            />
            <div className={`error-message ${showError ? "smooth" : ''}`}>Please enter a valid email address.</div>
             <button type="submit" className="tenth-page-main-form-btn" disabled={isSubmitting}>submit</button>
            </form>
          </div>
          <div className="tenth-page-main-keyboard">
            <div className="tenth-page-main-keyboard-keys tenth-page-main-keyboard-keys-first">
              {firstColumn.map((keyOne: any) =>
              <a 
                key={keyOne.keyValue} 
                onClick={() => writeEmail(!isSymbols ? keyOne.keyValue : keyOne.keyValueNumber)}
                className={`${isUpperCase ? 'class-upper-case' : ''}`}
              >
              {keyOne.keyImage
              ? <Image src={keyOne.keyImage} alt=''/>
              : <>
                  {!isSymbols
                  ? <>
                      {keyOne.keyValue}
                      {keyOne.keyValueNumber && 
                      <p>
                        {keyOne.keyValueNumber}
                      </p>}
                    </>
                  : <>
                    {keyOne.keyValueNumber}
                </>
                  }
              </>
              }
              </a>
              )}
            </div>

            <div className="tenth-page-main-keyboard-keys tenth-page-main-keyboard-keys-second">
              {secondColumn.map((keyOne: any) => 
                <a 
                  key={keyOne.keyValue} 
                  onClick={() => writeEmail(!isSymbols ? keyOne.keyValue : keyOne.keyValueNumber)}
                  className={`${isUpperCase ? 'class-upper-case' : ''}`}
                >
                {keyOne.keyImage 
                ? <Image src={keyOne.keyImage} alt=''/>
                : <>
                    {!isSymbols
                      ? keyOne.keyValue
                    : keyOne.keyValueNumber
                    }
                  </>
                }</a>  
              )}
            </div>

            <div className="tenth-page-main-keyboard-keys tenth-page-main-keyboard-keys-third">
              {thirdColumn.map((keyOne: any, index) => 
                <a
                  key={keyOne.keyValue + index}
                  onClick={() => writeEmail(!isSymbols ? keyOne.keyValue : keyOne.keyValueNumber)}
                  className={`${isUpperCase ? 'class-upper-case' : ''}`}
                >
                  {keyOne.keyImage 
                  ? <Image src={keyOne.keyImage} alt=''/>
                  : <>
                      {!isSymbols
                        ? keyOne.keyValue
                      : keyOne.keyValueNumber
                      }
                    </>
                  }</a>  
              )}
            </div>

            <div className="tenth-page-main-keyboard-keys tenth-page-main-keyboard-keys-fourth">
              {fourthColumn.map(keyOne => 
                <a 
                  key={keyOne.keyValue}
                  onClick={() => writeEmail(keyOne.keyValue)}
                >
                  {keyOne.keyImage 
                  ? <Image src={keyOne.keyImage} alt=''/>
                  : keyOne.keyValue}
                </a>  
              )}
            </div>
          </div>
        </div>
        
        <div 
          className={`success-message ${showSuccess ? 'smooth' : ''}`}
        >
          <div 
            className="success-message-text"
          >{'We\'ll send you the Protocol for the national flag'}</div>
        </div>
        
        
        <Footer 
          prevLink={'/eighth'} prevImage={eighthPageIcon.src.toString()}
          nextLink={'/second'} nextImage={secondPageIcon.src.toString()}
        />
      </main>
    </>
  );
}

export default Tenth;
