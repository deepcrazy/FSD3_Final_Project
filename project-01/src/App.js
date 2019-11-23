import './App.css'
import React from 'react'
import FormTitle from './components/FormTitle'
import { addData, getData } from './utils/FirebaseInterface'
import ResultsTable from './components/ResultsTable'
import BasicInfo from './components/Steps/BasicInfo'
import AddressInfo from './components/Steps/AddressInfo'
import PaymentInfo from './components/Steps/PaymentInfo'

export default function App() {
  const [step, setStep] = React.useState(1)
  const [results, setResults] = React.useState([])
  const [answers, setAnswers] = React.useState({})

  React.useEffect(() => {
    getData()
      .then(res => setResults(res))
      .catch(e => console.log(e))
  }, [])

  function handleData(dataObject) {
    return new Promise(resolve => {
      Object.keys(dataObject).forEach(key => {
        localStorage.setItem(key, dataObject[key])
      })
      setAnswers(Object.assign(answers, dataObject))
      if (step !== 3) {
        setStep(step + 1)
      } else {
        addData(
          answers.firstName,
          answers.lastName,
          answers.dietaryRestriction,
          answers.city,
          answers.province,
          answers.paymentType,
        ).then(res => {
          getData()
            .then(res => {
              setResults(res)
              localStorage.clear()
            })
            .catch(e => console.log(e))
          resolve(true)
        })
        setStep(4)
      }
    })
  }

  return (
    <div className='App'>
      <div className='App-Content'>
        {step === 1 && <BasicInfo giveData={handleData} />}
        {step === 2 && <AddressInfo giveData={handleData} />}
        {step >= 3 && (
          <>
            <PaymentInfo giveData={handleData} />
            <br />
            {step === 4 && (
              <>
                <FormTitle>Results</FormTitle>
                <ResultsTable results={results} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}
