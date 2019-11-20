import React from 'react'
import { Dialog } from '@alicloud/console-components'
import Form from './form'
import messages from './messages'

function getVerifyInformation(options) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line prefer-const
    let { lastRequestId: requestId, ...rest } = options
    let verifyCode

    function setRequestId(val) {
      requestId = val
    }
    function setVerifyCode(val) {
      verifyCode = val
    }

    const { verifyType } = options
    const { title } = messages[verifyType]

    try {
      Dialog.confirm({ // 弹出对话框
        title,
        content: (
          <Form
            options={rest}
            setRequestId={setRequestId}
            setVerifyCode={setVerifyCode}
            onError={reject}
          />
        ),
        onOk: () => {
          if (verifyType === 'ga' && verifyCode) {
            return resolve({ vCode: verifyCode })
          }
          if (requestId && verifyCode) {
            return resolve({
              reqId: requestId,
              vCode: verifyCode,
            })
          } else {
            console.warn( // eslint-disable-line no-console
              '[getVerifyInformation] failed: ', requestId, verifyCode
            )
          }
          return false
        },
        onCancel: () => {
          reject(new Error('Verification has been canceled!'))
        },
        onClose: () => {
          reject(new Error('Verification has been canceled!'))
        },
        needWrapper: false,
      })
    } catch (e) {
      reject(e)
    }
  })
}

export default getVerifyInformation
