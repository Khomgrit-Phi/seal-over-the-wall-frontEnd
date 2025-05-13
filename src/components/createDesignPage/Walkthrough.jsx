// Walkthrough.js
import Joyride, { STATUS } from 'react-joyride'
import { useWalkthroughStore } from '../../stores/useWalkthroughStore'

const WalkthroughTooltip = ({ step, index, stepIndex, backProps, skipProps, primaryProps, continuous, goToNext, steps }) => (
  <motion.div
    className="max-w-md p-6 bg-white rounded-2xl shadow-2xl flex flex-col gap-4"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-gray-800 text-lg font-semibold">{step.content}</div>

    {/* Indicators */}
    <div className="flex justify-center items-center gap-2">
      {steps.map((_, i) => (
        <div
          key={i}
          className={`h-2 w-2 rounded-full ${i === stepIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
        />
      ))}
    </div>

    {/* Buttons */}
    <div className="flex justify-between items-center mt-4">
      <button {...backProps} className="text-gray-500 hover:text-gray-700 text-sm px-4 py-2">
        ย้อนกลับ
      </button>
      <div className="flex gap-2">
        <button {...skipProps} className="text-gray-400 hover:text-gray-600 text-sm px-4 py-2">
          ข้าม
        </button>
        <button
          onClick={goToNext}
          {...primaryProps}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-lg"
        >
          {stepIndex === steps.length - 1 ? 'เริ่มใช้งาน' : 'ถัดไป'}

        </button>
      </div>
    </div>
  </motion.div>
)

const Walkthrough = () => {
  const { run, stepIndex, setStepIndex, stop } = useWalkthroughStore()

  const steps = [
    { target: '.step-1', content: 'Select product', disableBeacon: true },
    { target: '.step-2', content: 'Upload design' },
    { target: '.step-3', content: 'Select print areas' },
    { target: '.step-4', content: 'Select colorways' },
  ]

  return (
    <Joyride
      steps={steps}h
      run={run}
      stepIndex={stepIndex}
      continuous
      scrollToFirstStep
      showSkipButton
      disableOverlayClose
      components={{
        Tooltip: (props) => (
          <WalkthroughTooltip {...props} stepIndex={stepIndex} steps={steps} />
        ),
      }}
      styles={{
        options: {
          arrowColor: 'rgba(255, 255, 255, 255)',
          overlayColor: 'rgba(255, 255, 255, 0.6)',
          zIndex: 9999,
        },
        tooltip: {
          backgroundColor: 'rgba(255, 255, 255, 255)',
          color: '#333',
          fontSize: 16,
          padding: 20,
          boxShadow: 'none',
          borderRadius: 10,
          maxWidth: 200,
          fontWeight: 'bold',
          fontFamily: 'Poppins',
          lineHeight: 1.5,
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.4)',
        },
        buttonBack: {
          color: 'rgb(55, 71, 216)',
         },
        buttonNext: {
          backgroundColor: 'rgb(55, 71, 216)',
          color: 'white',
          fontSize: 16,
          padding: 10,
          boxShadow: 'none',
          borderRadius: 10,
          fontWeight: 'bold',
          fontFamily: 'Geist',
          border: 'none',
        }

      }}
      callback={(data) => {
        const { status, index, action, type } = data
        if (type === 'step:after' && action === 'next') {
          setStepIndex(index + 1)
        }
        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
          stop()
        }
      }}
    />
  )
}

export default Walkthrough;
