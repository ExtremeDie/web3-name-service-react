import reactRefresh from "@vitejs/plugin-react-refresh";

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
export default {
	base: "/web3-name-service-react/",
	plugins: [reactRefresh()],
	server: {
		host: "0.0.0.0",
		hmr: {
			port: 443,
		},
	},
};
