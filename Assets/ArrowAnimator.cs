using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ArrowAnimator : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.localPosition = Vector3.up * (Mathf.Sin(Time.time * 7f) * 0.1f);
    }
}
