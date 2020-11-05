const {Patient} = require('../models')
const jwt = require('jsonwebtoken')
const config = require ('../config/config')

function jwtSignPatient (patient) {
	const ONE_WEEK = 60* 60 * 24 * 7
	return jwt.sign(patient, config.authentication.jwtSecret, {
		expiresIn: ONE_WEEK
	})
}

module.exports = {
	async register(req, res) {
		try {
			const patient = await Patient.create(req.body)
			res.send(patient.toJSON())
		} catch (err){
			res.status(400).send({
				error: 'This IC number is already exist.'
			})
		}
	},
	async login(req, res) {
		try {
			const {ic, password} = req.body
			const patient = await Patient.findOne({
				where: {
					ic: ic
				}
			})
			if (!patient) {
				return res.status(403).send({
					error: 'The login information was incorrect'
				})
			}

			const isPasswordValid = password == patient.password
			if (!isPasswordValid) {
				return res.status(403).send({
					error: 'The login information was incorrect'
				})
			}

			const patientJson = patient.toJSON() 
			res.send({
				patient: patientJson,
				token: jwtSignPatient(patientJson)
			})
		} catch (err){
			res.status(500).send({
				error: 'Invalid An error has occured trying to log in.'
			})
		}
	}
	
}