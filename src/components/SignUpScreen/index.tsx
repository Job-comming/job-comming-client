import React, { FC } from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Button,
  Theme,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useForm } from 'react-hook-form'
import { EllipseCheckbox } from 'components/common/checkbox'
import { EllipseRadio } from 'components/common/radio'

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    padding: '70px 0',
  },
  form: {
    position: 'relative',
    display: 'flex',
    width: '467px',
    flexDirection: 'column',
  },
  formController: {
    marginBottom: '32px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    lineHeight: '1.4291em',
    paddingBottom: '10px',
  },
  input: {
    padding: 0,
    marginRight: '10px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  githubURL: {
    background: '#FFFFFF',
    border: '1px solid #CED4DA',
    boxSizing: 'border-box',
    borderRadius: '4px',
    fontSize: '16px',
    lineHeight: '23px',
    padding: '8px 10px',
  },
  submit: {
    width: '100%',
    height: '47px',
    color: `${theme.palette.primary.main}`,
  },
}))

interface FormData {
  interest: number
  level: number
  githubURL: string
}

const SignUpScreen: FC = () => {
  const classes = useStyles()
  const { register, handleSubmit, reset, errors } = useForm<FormData>()

  const onSubmit = (props: FormData) => {
    console.log(props)
  }

  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <FormControl className={classes.formController}>
              <label htmlFor="interest" className={classes.label}>
                1. 관심사는요? (다중선택이 가능해요!)
              </label>
              <div>
                <EllipseCheckbox
                  className={classes.input}
                  name="interest"
                  text="#fullstack"
                  value="fullstack"
                  ref={register({ required: '관심사를 선택해주세요' })}
                />
                <EllipseCheckbox
                  className={classes.input}
                  name="interest"
                  text="#backend"
                  value="backend"
                  ref={register({ required: '관심사를 선택해주세요' })}
                />
                <EllipseCheckbox
                  className={classes.input}
                  name="interest"
                  text="#frontend"
                  value="frontend"
                  ref={register({ required: '관심사를 선택해주세요' })}
                />
                <EllipseCheckbox
                  className={classes.input}
                  name="interest"
                  text="#CS"
                  value="CS"
                  ref={register({ required: '관심사를 선택해주세요' })}
                />
                <EllipseCheckbox
                  className={classes.input}
                  name="interest"
                  text="#프로젝트관리"
                  value="프로젝트관리"
                  ref={register({ required: '관심사를 선택해주세요' })}
                />
              </div>
              {errors.interest && <p>{errors.interest.message}</p>}
            </FormControl>
            <FormControl className={classes.formController}>
              <label htmlFor="level" className={classes.label}>
                2. 연차를 알려주세요
              </label>
              <RadioGroup name="level">
                <div>
                  <FormControlLabel
                    className={classes.input}
                    value="1"
                    control={
                      <EllipseRadio
                        text="뉴비"
                        ref={register({ required: '연차를 선택해주세요' })}
                      />
                    }
                    label=""
                  />
                  <FormControlLabel
                    className={classes.input}
                    value="2"
                    control={
                      <EllipseRadio
                        text="주니어"
                        ref={register({ required: '연차를 선택해주세요' })}
                      />
                    }
                    label=""
                  />
                  <FormControlLabel
                    className={classes.input}
                    value="3"
                    control={
                      <EllipseRadio
                        text="시니어"
                        ref={register({ required: '연차를 선택해주세요' })}
                      />
                    }
                    label=""
                  />
                </div>
              </RadioGroup>
              {errors.level && <p>{errors.level.message}</p>}
            </FormControl>
            <FormControl className={classes.formController}>
              <label htmlFor="githubURL" className={classes.label}>
                3. 깃허브 주소를 부탁해요!
              </label>
              <input
                className={classes.githubURL}
                name="githubURL"
                type="text"
                placeholder="jobcomming.github.com"
                ref={register()}
              />
            </FormControl>
            <Link href="/">
              <Button className={classes.submit} type="submit" variant="outlined">
                시작하기
              </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignUpScreen
