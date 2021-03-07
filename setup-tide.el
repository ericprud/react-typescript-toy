;; Set higher priority for backend importance when suggesting auto complete. This will bring the TSServer suggestions first instead of those recommended by dabbrev-code

(setq company-transformers '(company-sort-by-backend-importance))

;; Define company backends to use. First element contains priority TSServer -> Files -> yasnippet (if installed) -> dabbrev-code

(set (make-local-variable 'company-backends)
       '((company-tide company-files :with company-yasnippet :with company-dabbrev-code)
         (company-dabbrev-code company-dabbrev)))

;; Function to use your node_modules's TSServer to avoid possible collisions with project's Typescript version and Global Typescript version
(defun tsserver-node-modules ()
  (let* ((root (locate-dominating-file
                (or (buffer-file-name) default-directory)
                "node_modules"))
         (tsserver
          (and root
               (expand-file-name "node_modules/.bin/tsserver"
                                 root))))
    (when (and tsserver (file-executable-p tsserver))
      (setq-default tide-tsserver-executable tsserver))))
