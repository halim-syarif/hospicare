import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { useDispatch } from "react-redux";
import { setMidtrans } from "../../store/actions/history";

export default function Payment({ navigation, route }) {
  const dispatch = useDispatch()
  const { midtransUrl } = route.params
  const [redirectURL, setRedirectURL] = useState('')

  useEffect(() => {
    setRedirectURL(midtransUrl)
    dispatch(setMidtrans(''))
  },[])
 
  return (
    <WebView source={{ uri: redirectURL }}/>
  );
}

